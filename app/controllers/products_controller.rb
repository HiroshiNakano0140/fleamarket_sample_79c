class ProductsController < ApplicationController
  
  def index
    @products = Product.includes(:product_images).order('created_at DESC')
  end  

  def new
    @product = Product.new
    @product.product_images.build
    @category_parent_array = Category.where(ancestry: nil)
  end

  def create
    @category_parent_array = Category.where(ancestry: nil)
    @product = Product.new(product_params)    
    unless @product.save
      @product.product_images.build if @product.product_images.blank?   #画像が一枚も投稿されていない場合buildメソッドを実行
      render :new
    end
  end

  def show
    @product = Product.find(params[:id])
    @category_id = @product.category_id
    @category_parent = Category.find(@category_id).parent.parent
    @category_child = Category.find(@category_id).parent
    @category_grandchild = Category.find(@category_id)
  end

  def get_category_children
    @category_children = Category.find("#{params[:parent_id]}").children
  end

  def get_category_grandchildren
    @category_grandchildren = Category.find("#{params[:child_id]}").children
  end

  private
  def product_params
    params.require(:product).permit(
      :product_name,      #商品名
      :description,       #商品説明   
      :price,             #価格
      :brand_id,          #ブランド名
      :product_status,    #商品の状態
      :prefecture,        #都道府県
      :size,              #サイズ
      :shipping_fee,      #配送料 
      :shipping_day,      #発送までの日数
      :shipping_type,     #配送方法
      :category_id,       #カテゴリ
      :deal_closed_date,  #取引成立日時
      product_images_attributes: [:image]   #画像複数枚添付用     
    )
    .merge(
      seller_id: current_user.id, #ユーザID：ログイン中のユーザID
      trading_status: 1         #売買状況：売出し中（1）
    )  
  end  

end
