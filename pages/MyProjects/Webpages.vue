<template>
  <div>
    <Header/>


    <div class="container-a4">
		<ul class="caption-style-4">
			<li class="rounded-md border-4 border-sky hover:border-rhino">
			<img src="@/assets/img/mcontrols1.jpg" alt="mcontrols"/>
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>Moorcroft</h1>
						<p>Control Services</p>
					</div>
				</div>
			</li>
			<li class="rounded-md border-4 border-sky hover:border-rhino">
				<img src="@/assets/img/dbsmschool1.jpg" alt="dbsmschool"/>
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>DBSM</h1>
						<p>Driving School</p>
					</div>
				</div>
			</li>
			<li class="rounded-md border-4 border-sky hover:border-rhino">
				<img src="@/assets/img/reifen1.jpg" alt="reifen"/>
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>Reifen Boerse</h1>
						<p>Tyres and Autocare</p>
     			</div>
				</div>
			</li>
			<li class="rounded-md border-4 border-sky hover:border-rhino">
				 <img src="@/assets/img/transport1.jpg" alt="transport"/>
				<div class="caption">
					<div class="blur"></div>
					<div class="caption-text">
						<h1>Ruminscy Transport</h1>
						<p>Transport and services</p>
     			</div>
				</div>
			</li>
		</ul>
			 
	</div>

	 <div class="go-back">
         		<NuxtLink class="text-rhino" to="/projects">BACK</NuxtLink>
   	 </div>

   <Footer />
  </div>
</template>



<style>
	.go-back{
		margin-top:20px;
  		margin-bottom: 150px;
	    display: flex;
  		flex-wrap: wrap;
  		justify-content: center;
	}

	.container-a4{
		display: flex;
  		flex-wrap: wrap;
  		justify-content: center;
	}

	.caption-style-4{
		list-style-type: none;
		margin-top: 150px;
		padding: 25px;
		
	}

	.caption-style-4 li{
		/* float: left; */
		padding: 0px;
		position: relative;
		overflow: hidden;
		/* width: 600px; */
		margin-top:50px;
	}

	.caption-style-4 li:hover .caption{
		opacity: 1;
	}

	.caption-style-4 li:hover img{
		opacity: 1;
		transform: scale(1.15,1.15);
		-webkit-transform:scale(1.15,1.15);
		-moz-transform:scale(1.15,1.15);
		-ms-transform:scale(1.15,1.15);
		-o-transform:scale(1.15,1.15);
	}


	.caption-style-4 img{
		margin: 0px;
		padding: 0px;
		float: left;
		z-index: 0;
         cursor: pointer;
	}


	.caption-style-4 .caption{
		cursor: pointer;
		position: absolute;
		opacity: 0;
		-webkit-transition:all 0.45s ease-in-out;
		-moz-transition:all 0.45s ease-in-out;
		-o-transition:all 0.45s ease-in-out;
		-ms-transition:all 0.45s ease-in-out;
		transition:all 0.45s ease-in-out;
	}

	.caption-style-4 img{
		-webkit-transition:all 1.25s ease-in-out;
		-moz-transition:all 1.25s ease-in-out;
		-o-transition:all 1.25s ease-in-out;
		-ms-transition:all 1.25s ease-in-out;
		transition:all 1.25s ease-in-out;
	}
	.caption-style-4 .blur{
		background-color: rgba(0,0,0,0.85);
		height: 115px;
		width: 320px;
		z-index: 5;
		position: absolute;
		top: 120px;
	}

	.caption-style-4 .caption-text h1{
		
		font-size: 24px;
	}
	.caption-style-4 .caption-text{
		z-index: 10;
		color: #4C9EC8;
		position: absolute;
		width: 310px;
		/* height: 270px; */
		text-align: center;
		top:145px;
	}

@media (min-width: 250px) and (max-width: 967px) {
   
    .caption-style-4 img{
		
		padding: 20px;
    }
    .container-a4{

      padding: 30px;
    }

    .caption-style-4{

      margin-top: 100px;
	  padding: 25px;
    }

	.caption-style-4 .blur{
		height: 65px;
		width: 150px;
		z-index: 5;
		position: absolute;
		top: 70px;
	}

	.caption-style-4 .caption-text h1{
		font-size:  14px;
		

	}
	.caption-style-4 .caption-text{
		top: 70px;
		text-align: left;
		padding: 20px;
	}

	}


</style>
