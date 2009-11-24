<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.newsTicker.js"></script>
<style type="text/css">
	body {
		font-family: verdana,arial,helvetica;
		font-size: 12px;
	}
	#newsTicker {
		height: 33px;
		margin: 20px 0 0;
		width: 888px;
	}
	#tickerTextHolder {
		float: left;
		height: 32px;
		overflow: hidden;
		padding: 0 15px;
		width: 460px;
		border:1px solid black;
	}
	#tickerTextHolder .tickerText {
		color: #333333;
		line-height: 32px;
	}
	
	#code {
		border: 1px solid #666666;
		width: 400px;
		background: #eee;
		padding: 10px;
	}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>FDR newsTicker</title>
<script type="text/javascript">
	$(document).ready(function() {
		$('#tickerTextHolder').newsTicker({
			effect: 'slide'
		});
	});
</script>
</head>

<body>

<div id="container">
  <div id="newsTicker">
	  <div id="tickerTextHolder">
	    <div class="tickerText">1 Lorem ipsum dolor sit amet, consectetur adipiscing elit....</div>
	    <div class="tickerText">2 Cras nibh sapien, tincidunt at auctor at, tincidunt ut odio</div>
			<div class="tickerText">3</div>
			<div class="tickerText">4</div>
			<div class="tickerText">5</div>
			<div class="tickerText">6</div>
			<div class="tickerText">7</div>
			<div class="tickerText">8</div>
	  </div>
	</div>
	<div id="example">
		<h1>Example code</h1>
		<?php
		$string = '<style type="text/css">
	body {
		font-family: verdana,arial,helvetica;
		font-size: 12px;
	}
	#newsTicker {
		height: 33px;
		margin: 20px 0 0;
		width: 888px;
	}
	#tickerTextHolder {
		float: left;
		height: 32px;
		overflow: hidden;
		padding: 0 15px;
		width: 460px;
		border:1px solid black;
	}
	#tickerTextHolder .tickerText {
		color: #333333;
		line-height: 32px;
	}
</style>
		
<div id="newsTicker">
  <div id="tickerTextHolder">
    <div class="tickerText">1</div>
    <div class="tickerText">2</div>
    <div class="tickerText">3</div>
    <div class="tickerText">4</div>
    <div class="tickerText">5</div>
    <div class="tickerText">6</div>
    <div class="tickerText">7</div>
    <div class="tickerText">8</div>
  </div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		$("#tickerTextHolder").newsTicker({
			effect: "slide"
		});
	});
</script>';
		?>
		<div id="code"><?php highlight_string($string); ?></div>
	</div>
</div>

</body>
</html>
