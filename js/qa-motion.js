$(function()
{
	$('#qa_1 ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('Ques').hover(function()
	{
		$(this).addClass('Ques_on');
	}, function()
	{
		$(this).removeClass('Ques_on');
	}).click(function()
	{
		var $qa_content = $(this).next('div.Ans');
		if(!$qa_content.is(':visible'))
		{
			$('#qa_1 ul li div.Ans:visible').slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass('Ans').hide();
	
	
	$('#qa_2 ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('Ques').hover(function()
	{
		$(this).addClass('Ques_on');
	}, function()
	{
		$(this).removeClass('Ques_on');
	}).click(function()
	{
		var $qa_content = $(this).next('div.Ans');
		if(!$qa_content.is(':visible'))
		{
			$('#qa_2 ul li div.Ans:visible').slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass('Ans').hide();
	
	
	$('#qa_3 ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('Ques').hover(function()
	{
		$(this).addClass('Ques_on');
	}, function()
	{
		$(this).removeClass('Ques_on');
	}).click(function()
	{
		var $qa_content = $(this).next('div.Ans');
		if(!$qa_content.is(':visible'))
		{
			$('#qa_3 ul li div.Ans:visible').slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass('Ans').hide();
	
	
	$('#qa_4 ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('Ques').hover(function()
	{
		$(this).addClass('Ques_on');
	}, function()
	{
		$(this).removeClass('Ques_on');
	}).click(function()
	{
		var $qa_content = $(this).next('div.Ans');
		if(!$qa_content.is(':visible'))
		{
			$('#qa_4 ul li div.Ans:visible').slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass('Ans').hide();
});