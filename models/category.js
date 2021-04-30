const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
	{
		name: {type: String, required: true},
		description: {type: String, required: true}
	});

// Virtual for CategorySchema's URL
CategorySchema
.virtual('url')
.get(function(){
	return '/catalog/category' + this._id;
});


// Ecport module
module.exports = mongoose.model('Category', CategorySchema);

