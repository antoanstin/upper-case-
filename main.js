<!doctype html>
	<html>
		<head>
			 <title> methods </title> 
		</head>
		<body>
			<section>				
				<div>
					
					<script>
					let a=["f","A","y","K"];
					function upper(a){
						let nA=[];
						for(let i=0;i<a.length;i++)
						{
							if(a[i]==a[i].toUpperCase())
							{
								nA.push(a[i]);
								
							}
						}
						return nA;
					}
					console.log(upper(a))
					</script>
					
				</div>
			</section>
		</body>
	</html>