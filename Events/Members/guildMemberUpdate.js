const Keyv = require('keyv');
const names = new Keyv(process.env.names);

module.exports = async (client, oldMember, newMember) => {
  if (oldMember.nickname === newMember.nickname) return;
  let namesArr = await names.get(`${oldMember.user.id}_${oldMember.guild.id}`);
  if (!namesArr) namesArr = [];
  let nameChange = {};
  nameChange.newName = newMember.nickname || newMember.user.username;
  nameChange.date = Date.now();
  namesArr.push(nameChange);
  await names.set(`${oldMember.user.id}_${oldMember.guild.id}`, namesArr);
}