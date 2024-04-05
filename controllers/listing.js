const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (error) {
        console.error("Error occurred while fetching listings:", error);
        req.flash("error", "An unexpected error occurred. Please try again later.");
        res.redirect("/listings");
    }
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: {
                    path: "author",
                }
            })
            .populate("owner");
        if (!listing) {
            req.flash("error", "Listing you requested for does not exist!");
            return res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
    } catch (error) {
        console.error("Error occurred while fetching listing details:", error);
        req.flash("error", "An unexpected error occurred. Please try again later.");
        res.redirect("/listings");
    }
};

module.exports.createListing = async (req, res) => {
    try {
        const { title, description, price, location, country, category } = req.body.listing;
        const owner = req.user._id;

        const newListing = new Listing({
            title,
            description,
            price,
            location,
            country,
            category,
            owner
        });

        const savedListing = await newListing.save();

        req.flash("success", "New Listing Created");
        res.redirect("/listings");
    } catch (error) {
        console.error("Error occurred while creating listing:", error);
        req.flash("error", "An unexpected error occurred. Please try again later.");
        res.redirect("/listings");
    }
};

// Other controller methods...

module.exports.search = async (req, res) => {
    try {
        // Your search logic goes here
    } catch (error) {
        console.error("Error occurred during search:", error);
        req.flash("error", "An unexpected error occurred during the search.");
        return res.redirect("/listings");
    }
};
