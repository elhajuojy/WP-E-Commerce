jQuery((function(i){const e=window.jetpackSocialClassicEditorInitialState??{},t=i("#publicize-form");if(!e||e.sharesRemaining>e.numberOfConnections)return;const n=i("#publicize-form").find('input[type="checkbox"]');0!==e.sharesRemaining?t.click((function(s){const a=i(s.target);if(!a.is("input")||a.is(":disabled"))return;const c=t.find('input[type="checkbox"]:checked').length>=e.sharesRemaining;n.each((function(){this.id!==a.attr("id")&&(this.checked||(i(this).parent().toggleClass("wpas-disabled",c),i(this).prop("disabled",c)))}))})):n.each((function(){i(this).parent().addClass("wpas-disabled"),i(this).prop("disabled",!0)}))}));