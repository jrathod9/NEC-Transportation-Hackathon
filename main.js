var arr = ["https://res.cloudinary.com/chaturbots/image/upload/v1559439859/a8_wj7xz4.jpg",
			"https://res.cloudinary.com/chaturbots/image/upload/v1559439858/c8_skfbkt.jpg",
			"https://res.cloudinary.com/chaturbots/image/upload/v1559439859/b8_nkrypf.jpg",
			"https://res.cloudinary.com/chaturbots/image/upload/v1559439858/d8_vqft0v.jpg"];
var counter = -1;
function newImages()
{
	if(counter<3){
		$('#one').attr('src',arr[counter+1]);
		$('#two').attr('src',arr[counter+2]);
		counter+=2;	
	}
	else
	{
		$('#imageRow').attr('style',"display:none");
		$('#gasLimitAlert').attr('style','display:block');
		// $('#twoBack').attr('style',"display:none");
	}
	
}