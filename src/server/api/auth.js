'use strict';

export default function (router) {
  router.get('/user/me', (req, res) => {
    res.json([]);
  });
}
