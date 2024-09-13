var ananyooJS = {
  removeAriaLabelByFromProductListingTitle: function() {
    jQuery(".product-grid .grid__item").each(function(){
      jQuery(this).find(".product-card-wrapper .card__heading a").attr("aria-labelledby", "");
      jQuery(this).find(".product-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
    });
  },
  removeHrefLinkFromCollageItems: function() {
    jQuery(".collage .collage__item").each(function(){
      jQuery(this).find(".product-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
    });
  },

  removeHrefLinkFromCollectionItems: function() {
    jQuery(".collection-list .collection-list__item").each(function(){
      jQuery(this).find(".collection-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
    });
  },
  
  removeHrefLinkFromBlogPostItems: function() {
    jQuery(".blog__posts .blog__post").each(function(){
      jQuery(this).find(".article-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
    });
  },

  removeNoScriptFromPage: function() {
    jQuery("noscript").remove();
  },

  addingH2afterH1: function(selectParentClass) { 
      var h1Text = jQuery(selectParentClass + " h1").html();       
      jQuery( "<h2 aria-hidden='true' style='visibility:hidden'>" + h1Text +  "</h2>" ).insertAfter( selectParentClass + " h1" );
  },

   removeHrefLinkFromBlogListItems: function() {
    jQuery(".blog-articles .blog-articles__article").each(function(){
      jQuery(this).find(".article-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
    });
  },

  removeHrefLinkFromCartItems: function() {
    jQuery(".cart-items .cart-item").each(function(){
      jQuery(this).find(".cart-item__media a").attr("href", "");
    });
  },

  modifyImageAltValueInProductDetailsPage: function() {
   var imageText =  jQuery(".product-media-modal__content img").attr("alt");
    jQuery(".product-media-modal__content img").each(function() {
      jQuery(this).attr("alt", "");
      if(jQuery(this).hasClass(".active")) {
        jQuery(this).attr("alt", imageText);
      }
    });
  },
  removeHrefLinkFromMayAlsoLikeItems: function() {
    setTimeout(function() {   
       jQuery(".related-products .product-grid .grid__item").each(function(){
        jQuery(this).find(".product-card-wrapper .card__inner .card__content .card__heading a").attr("href", "");
        jQuery(this).find(".product-card-wrapper .card__content .card__heading a").attr("aria-labelledby", "");
      });
    }, 3000); 
  },

  removeBannerHeadingFromContactUsPage: function() {
    jQuery(".content-container h2").remove();
    jQuery('.section-template--20799519195426__cart-items-padding .title-wrapper-with-link a').attr("aria-label", "Cart Page: Continue Shopping");
    jQuery('.section-template--20799519195426__cart-items-padding .cart__warnings a').attr("aria-label", "Empty Cart: Continue Shopping");


    jQuery(".order-history tbody tr").each(function(index) {
      jQuery(this).find("td:first-child").attr("id", "RowOrder-"+ index);
      jQuery(this).find("td").removeAttr("headers");
    });
  },
  homePageTopBrandCollectionAltVlaue: function(selectedClass, altText) {
    jQuery(selectedClass).each(function() {
      var brandCurrentAltValue = jQuery(this).find(".card__media .media img").attr("alt");
      console.log(brandCurrentAltValue);
      if(brandCurrentAltValue) {
        jQuery(this).find(".card__media .media img").attr("alt", altText + brandCurrentAltValue);
      }

    });
  },
  removeButtonPrimaryClass: function() {
    jQuery("#Banner-template--23253034762530__2d7c1a79-fee9-4ea0-879e-6cff1fa672c8 .banner__buttons .button").removeClass("button--primary");
  },
  replaceH3ByH2: function() {
    jQuery(".collection-list li").each(function(){
      jQuery(this).find('.card__information h3').replaceWith(function () {
        return "<h2 class='card__heading'>" + jQuery(this).html() + "</h2>";
      });
    });
    
  },
  replaceH3ByH2NewsList: function() {
    jQuery(".blog-articles .blog-articles__article").each(function(){
      jQuery(this).find('.card__information h3').replaceWith(function () {
        return "<h2 class='card__heading'>" + jQuery(this).html() + "</h2>";
      });
    });
    
    
  }

}




jQuery(document).ready(function() {
  console.log('welcome to hell');
  ananyooJS.removeAriaLabelByFromProductListingTitle();
  ananyooJS.removeHrefLinkFromCollageItems();
  ananyooJS.removeHrefLinkFromCollectionItems();
  ananyooJS.removeHrefLinkFromBlogPostItems();
  ananyooJS.removeNoScriptFromPage();
  ananyooJS.addingH2afterH1(".main-blog");
  ananyooJS.addingH2afterH1("#shopify-section-template--20799519260962__main");
  // ananyooJS.addingH2afterH1("#shopify-section-template--23253034795298__main");
  ananyooJS.removeHrefLinkFromBlogListItems();
  ananyooJS.removeHrefLinkFromCartItems();
  ananyooJS.removeHrefLinkFromMayAlsoLikeItems();
  ananyooJS.modifyImageAltValueInProductDetailsPage();
  ananyooJS.removeBannerHeadingFromContactUsPage();
  ananyooJS.homePageTopBrandCollectionAltVlaue("#Slider-template--23253034762530__f995c9b4-80b2-409a-98d7-8130b13236e6 li", "Ananyoo Top Brand: ");
  ananyooJS.homePageTopBrandCollectionAltVlaue(".collection-list li", "Product Collection: ");
  ananyooJS.removeButtonPrimaryClass();
  ananyooJS.replaceH3ByH2();
  ananyooJS.replaceH3ByH2NewsList();

});