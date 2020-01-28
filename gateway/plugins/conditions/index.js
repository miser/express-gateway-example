module.exports = {
  name: 'white-list',
  schema: {
    $id: 'white-list',
  },
  handler: conditionConfig => req => {
    return conditionConfig.list.indexOf(req.url) < 0;
  }
};