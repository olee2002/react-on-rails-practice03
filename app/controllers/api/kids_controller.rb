class Api::KidsController < ApplicationController
    def index
        @parent = Parent.find(params[:parent_id])
        @kids = @parent.kids.all
        render json: @kids
    end
    def create
        @parent = Parent.find(params[:parent_id])
        @kid = @parent.kids.create(kid_params)
        render json: @kid
    end
    def update
        @kid = Kid.find(params[:id])
        @kid.update(kid_params)
    end
    def destroy
        @kid = Kid.destroy(params[:id])
        @parent = Parent.find(params[:parent_id])
        @kids = @parent.kids.all
        render json: @kids
    end
    private
    def kid_params
        params.require(:kid).permit(:name, :age)
    end
end
