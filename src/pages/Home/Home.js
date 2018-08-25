import React, { Component } from 'react'; 
class Home extends Component { 
	render() { 
		return (
			<div>
			<section className="slide1">
				<div className="wrap-slick1">
				<div className="slick1">
					<div className="item-slick1 item1-slick1" style={{backgroundImage: 'url(images/master-slide-02.jpg)'}}>
					<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
						Women Collection 2018
						</span>
						<h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
						New arrivals
						</h2>
						<div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
						{/* Button */}
						<a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
							Shop Now
						</a>
						</div>
					</div>
					</div>
					<div className="item-slick1 item2-slick1" style={{backgroundImage: 'url(images/master-slide-03.jpg)'}}>
					<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rollIn">
						Women Collection 2018
						</span>
						<h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="lightSpeedIn">
						New arrivals
						</h2>
						<div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="slideInUp">
						{/* Button */}
						<a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
							Shop Now
						</a>
						</div>
					</div>
					</div>
					<div className="item-slick1 item3-slick1" style={{backgroundImage: 'url(images/master-slide-04.jpg)'}}>
					<div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span className="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="rotateInDownLeft">
						Women Collection 2018
						</span>
						<h2 className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="rotateInUpRight">
						New arrivals
						</h2>
						<div className="wrap-btn-slide1 w-size1 animated visible-false" data-appear="rotateIn">
						{/* Button */}
						<a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
							Shop Now
						</a>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* Banner */}
			<section className="banner bgwhite p-t-40 p-b-40">
				<div className="container">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src="images/banner-02.jpg" alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Dresses
						</a>
						</div>
					</div>
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src="images/banner-05.jpg" alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Sunglasses
						</a>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src="images/banner-03.jpg" alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Watches
						</a>
						</div>
					</div>
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src="images/banner-07.jpg" alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Footerwear
						</a>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					{/* block1 */}
					<div className="block1 hov-img-zoom pos-relative m-b-30">
						<img src="images/banner-04.jpg" alt="IMG-BENNER" />
						<div className="block1-wrapbtn w-size2">
						{/* Button */}
						<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
							Bags
						</a>
						</div>
					</div>
					{/* block2 */}
					<div className="block2 wrap-pic-w pos-relative m-b-30">
						<img src="images/icons/bg-01.jpg" alt="IMG" />
						<div className="block2-content sizefull ab-t-l flex-col-c-m">
						<h4 className="m-text4 t-center w-size3 p-b-8">
							ĐĂNG KÝ VÀ ĐƯỢC GIẢM GIÁ 20%
						</h4>
						<p className="t-center w-size4">
							Hãy là người thích tìm hiểu về những tin tức thời trang mới nhất và nhận được những lời đề nghị hữu ích từ chúng tôi
						</p>
						<div className="w-size2 p-t-25">
							{/* Button */}
							<a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
							Đăng Ký Ngay
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* New Product */}
			<section className="newproduct bgwhite p-t-45 p-b-105">
				<div className="container">
				<div className="sec-title p-b-60">
					<h3 className="m-text5 t-center">
					SẢN PHẨM NỔI BẬT
					</h3>
				</div>
				{/* Slide2 */}
				<div className="wrap-slick2">
					<div className="slick2">
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
							<img src="images/item-02.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Herschel supply co 25l
							</a>
							<span className="block2-price m-text6 p-r-5">
							$75.00
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative">
							<img src="images/item-03.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Denim jacket blue
							</a>
							<span className="block2-price m-text6 p-r-5">
							$92.50
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative">
							<img src="images/item-05.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Coach slim easton black
							</a>
							<span className="block2-price m-text6 p-r-5">
							$165.90
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
							<img src="images/item-07.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Frayed denim shorts
							</a>
							<span className="block2-oldprice m-text7 p-r-5">
							$29.50
							</span>
							<span className="block2-newprice m-text8 p-r-5">
							$15.90
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
							<img src="images/item-02.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Herschel supply co 25l
							</a>
							<span className="block2-price m-text6 p-r-5">
							$75.00
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative">
							<img src="images/item-03.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Denim jacket blue
							</a>
							<span className="block2-price m-text6 p-r-5">
							$92.50
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative">
							<img src="images/item-05.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Coach slim easton black
							</a>
							<span className="block2-price m-text6 p-r-5">
							$165.90
							</span>
						</div>
						</div>
					</div>
					<div className="item-slick2 p-l-15 p-r-15">
						{/* Block2 */}
						<div className="block2">
						<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
							<img src="images/item-07.jpg" alt="IMG-PRODUCT" />
							<div className="block2-overlay trans-0-4">
							<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
								<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
								<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
							</a>
							<div className="block2-btn-addcart w-size1 trans-0-4">
								{/* Button */}
								<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
								Add to Cart
								</button>
							</div>
							</div>
						</div>
						<div className="block2-txt p-t-20">
							<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
							Frayed denim shorts
							</a>
							<span className="block2-oldprice m-text7 p-r-5">
							$29.50
							</span>
							<span className="block2-newprice m-text8 p-r-5">
							$15.90
							</span>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* Banner2 */}
			<section className="banner2 bg5 p-t-55 p-b-55">
				<div className="container">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
					<div className="hov-img-zoom pos-relative">
						<img src="images/banner-08.jpg" alt="IMG-BANNER" />
						<div className="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
						<span className="m-text9 p-t-45 fs-20-sm">
							The Beauty
						</span>
						<h3 className="l-text1 fs-35-sm">
							Lookbook
						</h3>
						<a href="#" className="s-text4 hov2 p-t-20 ">
							View Collection
						</a>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
					<div className="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
						<img src="images/shop-item-09.jpg" alt="IMG-BANNER" />
						<div className="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
						<div className="t-center">
							<a href="product-detail.html" className="dis-block s-text3 p-b-5">
							Gafas sol Hawkers one
							</a>
							<span className="block2-oldprice m-text7 p-r-5">
							$29.50
							</span>
							<span className="block2-newprice m-text8">
							$15.90
							</span>
						</div>
						<div className="flex-c-m p-t-44 p-t-30-xl">
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 days">
								69
							</span>
							<span className="s-text5">
								days
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 hours">
								04
							</span>
							<span className="s-text5">
								hrs
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 minutes">
								32
							</span>
							<span className="s-text5">
								mins
							</span>
							</div>
							<div className="flex-col-c-m size3 bo1 m-l-5 m-r-5">
							<span className="m-text10 p-b-1 seconds">
								05
							</span>
							<span className="s-text5">
								secs
							</span>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* Blog */}
			<section className="blog bgwhite p-t-94 p-b-65">
				<div className="container">
				<div className="sec-title p-b-52">
					<h3 className="m-text5 t-center">
					BLOG CỦA CHÚNG TÔI
					</h3>
				</div>
				<div className="row">
					<div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
					{/* Block3 */}
					<div className="block3">
						<a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
						<img src="images/blog-01.jpg" alt="IMG-BLOG" />
						</a>
						<div className="block3-txt p-t-14">
						<h4 className="p-b-7">
							<a href="blog-detail.html" className="m-text11">
							Black Friday Guide: Best Sales &amp; Discount Codes
							</a>
						</h4>
						<span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
						<span className="s-text6">on</span> <span className="s-text7">July 22, 2017</span>
						<p className="s-text8 p-t-16">
							Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
						</p>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
					{/* Block3 */}
					<div className="block3">
						<a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
						<img src="images/blog-02.jpg" alt="IMG-BLOG" />
						</a>
						<div className="block3-txt p-t-14">
						<h4 className="p-b-7">
							<a href="blog-detail.html" className="m-text11">
							The White Sneakers Nearly Every Fashion Girls Own
							</a>
						</h4>
						<span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
						<span className="s-text6">on</span> <span className="s-text7">July 18, 2017</span>
						<p className="s-text8 p-t-16">
							Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
						</p>
						</div>
					</div>
					</div>
					<div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
					{/* Block3 */}
					<div className="block3">
						<a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
						<img src="images/blog-03.jpg" alt="IMG-BLOG" />
						</a>
						<div className="block3-txt p-t-14">
						<h4 className="p-b-7">
							<a href="blog-detail.html" className="m-text11">
							New York SS 2018 Street Style: Annina Mislin
							</a>
						</h4>
						<span className="s-text6">By</span> <span className="s-text7">Nancy Ward</span>
						<span className="s-text6">on</span> <span className="s-text7">July 2, 2017</span>
						<p className="s-text8 p-t-16">
							Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
						</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* Shipping */}
			<section className="shipping bgwhite p-t-62 p-b-46">
				<div className="flex-w p-l-15 p-r-15">
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
					<h4 className="m-text12 t-center">
					Giao hàng miễn phí trên toàn quốc
					</h4>
					<a href="#" className="s-text11 t-center">
					Bấm vào đây để biết thêm thông tin
					</a>
				</div>
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
					<h4 className="m-text12 t-center">
					Nhận đổi trả hàng trong 3 ngày
					</h4>
					<span className="s-text11 t-center">
					Đổi trả trong 24h đầu sau khi nhận hàng được miễn phí ship, 2 ngày còn lại khách chiệu phí ship đổi trả &amp; phải còn Thẻ/Mạc
					</span>
				</div>
				<div className="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
					<h4 className="m-text12 t-center">
					Thời gian mở cửa
					</h4>
					<span className="s-text11 t-center">
					Các ngày trong tuần từ 8h30' - 22h30'
					</span>
				</div>
				</div>
			</section>
			</div>

		);
 	}
 } 

export default Home;