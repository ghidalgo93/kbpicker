const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema(
	{
		item: { type: Schema.Types.ObjectsId, ref: 'Item', required: true} // referance to the associated item
	}
);

// Virtual for iteminstance's URL
ItemInstanceSchema
.virtual('url')
.get(function(){
	return '/catalog/iteminstance' + this._id;
});

// Export model 
module.exports = mongoose.model('ItemInstance', ItemInstanceSchema);
