import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    render() {
        var { product } = this.props;
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
              {/* Block2 */}
            <div className="block2">
                <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                  <img src={product.image_link} alt="IMG-PRODUCT" />
                  <div className="block2-overlay trans-0-4">
                    <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                      <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                      <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                    </a>
                    <div className="block2-btn-addcart w-size1 trans-0-4">
                      {/* Button */}
                      <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                        mua ngay
                      </button>
                    </div>
                  </div>
                </div>
                <div className="block2-txt p-t-20">
                  <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                    {product.name}
                  </a>
                  {this.showPrice(product)}
                </div>
              </div>
            </div>
        );
    }

    showPrice(product) {
        var sale = ((100-product.discount)/100) * product.price;
        if (product.discount <= 0) {
            return (
                <span className="block2-price m-text6 p-r-5">
                    {this.format_number(product.price)}₫
                </span>
            );
        }
        return (
            <div>
                <span className="block2-oldprice m-text7 p-r-5">
                {this.format_number(product.price)}₫
                </span>
                <span className="block2-newprice m-text8 p-r-5">
                {this.format_number(product.price)}₫
                </span>
            </div>
        );
    }
    format_number(val){
        var v = Number(val);
        if (isNaN(v)) 
            { 
                return val; 
            }
        var sign = (v < 0) ? '-' : '';
        var res = Math.abs(v).toString().split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
        return sign + res;
    }
}

export default ProductItem;
