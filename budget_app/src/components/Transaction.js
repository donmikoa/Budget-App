import React from 'react'

const Transaction = ({transaction}) => {
    return (
        <div>
            
        </div>
    )
}

export default Transaction



$('.charity-alphabetical').change(function () {
	var n, t;
	$(this).val() != ''
		? ((n = $(this).val() == '#' ? '#\\' + this.value : '#' + this.value),
			$('#refresh-btn').show())
		: (n = '.letter-container:not(.letter-container-empty)'),
		(t = $(n)),
		$('.letter-container')
			.not(t)
			.hide(600),
		t.show(600);
});


window.onload = function () {
 
  document.getElementById("reset").onclick = function () {
        $('.charity-type').val('select').trigger('change');

        window.location.href = "https://dev.give.com/national-charity-reviews/select";
    };
	var selItem = sessionStorage.getItem("SelItem");
	if (selItem == null) {
		selItem = 'select';
	} else {
		$('.charity-type').val(selItem);
	};
	

}

$('.charity-type').change(function () {
	var selVal = $(this).val();
	sessionStorage.setItem("SelItem", selVal);
});

function accreditation(obj) {
	if ($(obj).is(":checked")) {
		$(".notAccredited").hide();
	} else {
		$(".notAccredited").show();
    }
}

$('.directory-list').each(function () {
	if ($.trim($(this).text()) == '' && $(this).children().length == 0) {
		$(this).parent().hide();
		$(this).html('<li>No charities found for chosen filter.</li>');
	}
});








