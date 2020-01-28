module.exports = {
  name: 'rewrite',
  schema: {
    $id: 'rewrite',
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      req.url = req.url.replace(actionParams.search, actionParams.replace);
      next()
    };
  }
};