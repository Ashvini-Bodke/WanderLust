const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route (GET /listings)
router.get("/", wrapAsync(listingController.index));

// Create Listing Route (POST /listings)
router.post("/", isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

// Search Listings Route (GET /listings/search)
router.get("/search", listingController.search);

// New Listing Form Route (GET /listings/new)
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Listing Route (GET /listings/:id)
router.get("/:id", wrapAsync(listingController.showListing));

// Update Listing Route (PUT /listings/:id)
router.put("/:id", isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing));

// Delete Listing Route (DELETE /listings/:id)
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Listing Form Route (GET /listings/:id/edit)
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// Filter Listings Route (GET /listings/filter/:q)
router.get("/filter/:q", wrapAsync(listingController.filterListings));



module.exports = router;
