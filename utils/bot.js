const { avatarFormat } = require("./user");

function partialBotObject(bot) {
  return {
    tags: bot.details.tags,
    avatar: avatarFormat(bot),
    name: bot.username,
    id: bot.id || bot._id,
    status: bot.status,
    description: bot.details.shortDescription,
    votes: bot.votes ? bot.votes.current : -1,
  };
}

module.exports = {
  partialBotObject,
};
