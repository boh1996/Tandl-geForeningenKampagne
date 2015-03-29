$(document).on("submit", "#findForm", function (event) {
	event.preventDefault();

	var url = "https://cors-anywhere.herokuapp.com/http://www.tandlaegeforeningen.dk/Patienter/Vejvisere/Find_tandlaege.aspx?";
	var error = false;

	if ( $("#zip").val().length > 0 & $("#address").val().length > 0 ) {
		url = url + "zip=" + $("#zip").val() + "&" + "address=" + $("#address").val();
	} else if ( $("#address").val().length > 0 ) {
		url = url + "address=" + $("#address").val();
	} else if ( $("#zip").val().length > 0 ) {
		url = url + "zip=" + $("#zip").val();
	} else {
		error = true;
		// Error
	}

	if ( error != true ) {
		$("#spinner").removeClass("hidden");
		$("#findForm").css("opacity", "0.3");

		$.ajax({
			origin: window.location.protocol + '//' + window.location.host,
			url : url,
			success: function ( data ) {
				var site = $(data);
				var results = [
					{
						items : []
					}
				];

				$("#searchContainer").html("<!-- -->");
				$(".error-text").remove();

				$(site).find(".soegklinik .row").each( function ( index, element ) {
					if ( index > 0 && $(element).find(".col-xs-6").length > 0 ) {
						var anchors = $(element).find("a");
						var dentist = {
							phone : anchors[1].text.trim(),
							name : anchors[0].text.trim().replace("/", " / "),
							address : $(element).find(".col-xs-6").html().trim().replace("                        ", "").replace("<br>", "").replace("\n", "<br>").replace("/", " / ").replace("&nbsp;", ", ")
						}
						if ( results[results.length - 1]["items"].length > 3 ) {
							results.push({
								items : [dentist]
							});
						} else {
							results[results.length - 1]["items"].push(dentist);
						}
					}
				} );

				if ( results[0]["items"].length > 0 ) {
					$(results).each( function ( i, page ) {
						var pageElement = $('<div class="item"><div class="row"></div></div>');
						var pageClass = 12 / page["items"].length; 

						$(page["items"]).each( function ( indx, item ) {
							var template = $("#searhItem").clone();
							template.removeClass("col-md-3");
							template.addClass("col-md-" + pageClass);
							template.find(".name").html(item.name);
							template.find(".address").html(item.address);
							template.find(".phone").html('<i class="fa fa-phone"></i>'+item.phone);
							template.find("img").attr("src", "http://placehold.it/300x100/006690/66A3BC&text=Tandlæge")
							pageElement.find(".row").append(template);
						} );

						$("#searchContainer").prepend(pageElement);
					} );

					$("#spinner").addClass("hidden");
					$("#findForm").css("opacity", "1.0");
					$("#contact_form").addClass("hidden");
					$("#search_page").removeClass("hidden");
					$("#search_page .item:first").addClass("active");
					$("#myCarousel").append('<a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="fa fa-chevron-left fa-2x"></i></a><a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="fa fa-chevron-right fa-2x"></i></a>');
					$('#myCarousel').carousel({
    					interval: 10000
					});
				} else {
					$("#spinner").addClass("hidden");
					$("#findForm").css("opacity", "1.0");
					$("#contact_form").addClass("hidden");
					$("#search_page").removeClass("hidden");

					$(".search-back-container").prepend('<h2 style="color:white; margin-bottom: 42px;" class="error-text">Ingen resultater fundet</h2>');
				}
			},
			error : function () {
				$("#spinner").addClass("hidden");
				$("#findForm").css("opacity", "1.0");
				$("#contact_form").addClass("hidden");
				$("#search_page").removeClass("hidden");

				$(".search-back-container").prepend('<h2 style="color:white; margin-bottom: 42px;" class="error-text">Ingen resultater fundet</h2>');
			}
		});
	}
});

$(document).on("click", ".search-back", function (event) {
	event.preventDefault();

	$("#search_page").addClass("hidden");
	$("#contact_form").removeClass("hidden");
});