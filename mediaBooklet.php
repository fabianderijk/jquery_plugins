<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.mediaBooklet.js"></script>
<style type="text/css">
	body {
		font-family: verdana,arial,helvetica;
		font-size: 12px;
	}
	#mediaBooklet {
		height: 353px;
    overflow: hidden;
    position: relative;
    width: 600px;
	}
	#mediaBooklet .items {
		height: 353px;
    position: absolute;
    width: auto;
	}
	#mediaBooklet .items img {
		left: 0;
		position: absolute;
	}
	#mediaBooklet .navigation {
		background: #FFFFFF;;
    bottom: 0;
    display: block;
    height: 26px;
    position: absolute;
    right: 0;
    width: 200px;
    z-index: 2;
	}
	#mediaBooklet .navigation .prev, #mediaBooklet .navigation .next, #mediaBooklet .navigation .pager {
		float: left;
		margin-left: 10px;
		cursor: pointer;
	}
	#mediaBooklet .navigation .pager .pager-item {
		width: 10px;
		height: 20px;
		background: #FF0000;
		cursor:pointer;
		float: left;
		margin-left: 10px;
	}
	#mediaBooklet .navigation .pager .pager-item.active {
		background: #FF00FF;
	}
	
	#code {
		border: 1px solid #666666;
		width: 400px;
		background: #eee;
		padding: 10px;
	}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MediaBooklet</title>
<script type="text/javascript">
	$(document).ready(function() {
		$('#mediaBooklet').mediaBooklet({showTime: 4000, effect: 'fade'});
	});
</script>
</head>

<body>
<div id="container">
  <div id="mediaBooklet">
    <div class="navigation">
      <div class="prev">vorige</div>
      <div class="pager"></div>
			<div class="next">volgende</div>
    </div>
    <div class="items">
      <img src="pictures/1.jpg">
      <img src="pictures/2.jpg">
      <img src="pictures/3.jpg">
    </div>
  </div>
</body>
</html>