const Admin = require('../models/admin');

const admin_index = (req, res) => {
  Admin.find().sort({createdAt: -1})
  .then((result) => {
    res.render('blogs/admin', {title: 'All Blogs', admins: result})
  })
  .catch((err) => {
    console.log(err);
  });
}

const admin_create_post = (req, res) => {
    const admin = new Admin(req.body);
    admin.save()
      .then((result) => {
        res.redirect('/admin');
      })
      .catch((err) => {
        console.log(err);
      });
}

//order matters must be above :id
const admin_create_get = (req, res) => {
  res.render('blogs/create', {title: 'Create a new Blog'});
}

const admin_details = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Admin.findById(id)
    .then(result => {
      res.render('blogs/details', {admin: result, title: 'Blog Details'});
    })
    .catch(err => {
      res.status(404).render('404', {title: 'Blog not found'});
    });
}

const admin_delete = (req, res) => {
  const id = req.params.id;
  Admin.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/admin'})
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  admin_index,
  admin_create_post,
  admin_create_get,
  admin_details,
  admin_delete
}
