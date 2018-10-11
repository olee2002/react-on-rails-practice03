class Api::ParentsController < ApplicationController
   
    def index
        @parents = Parent.all
        render json: @parents
    end

    def show
        @parent = Parent.find(params[:id])
        render json: @parent
    end

    def create
        @parent = Parent.create(parent_params)
        render json: @parent
    end

    def update
        @parent = Parent.find(params[:id])
        @parent.update(parent_params)
    end

    def destroy
        @parent = Parent.destroy(params[:id])
        @parents = Parent.all
        render json: @parents
    end
    private
    def parent_params
        params.require(:parent).permit(:name, :age, :birthday)
    end
end
