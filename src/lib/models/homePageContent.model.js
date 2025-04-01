import mongoose from "mongoose";
const homePageContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        requires: true,
        default: 'inngest',
    }, 
},
{timestamps: true}
);
const HomePageContent = mongoose.models.HomePageContent || mongoose.model('HomePageContent', homePageContentSchema);
export default HomePageContent;
