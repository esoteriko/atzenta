class FollowUpsController < ApplicationController
  before_action :set_follow_up, only: [:show, :edit, :update, :destroy]
  before_action :set_meeting
  before_action :authenticate_user!
  # GET /follow_ups
  # GET /follow_ups.json
  def index
    @follow_ups = FollowUp.all
  end

  # GET /follow_ups/1
  # GET /follow_ups/1.json
  def show
  end

  # GET /follow_ups/new
  def new
    @follow_up = FollowUp.new 
  end

  # GET /follow_ups/1/edit
  def edit
  end

  # POST /follow_ups
  # POST /follow_ups.json
  def create
    @follow_up = FollowUp.new(follow_up_params)
    @follow_up.meeting = @meeting

    respond_to do |format|
      if @follow_up.save
        format.html { redirect_to @follow_up.meeting, notice: 'Follow up was successfully created.' }
        format.json { render :show, status: :created, location: @follow_up }
      else
        format.html { render :new }
        format.json { render json: @follow_up.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /follow_ups/1
  # PATCH/PUT /follow_ups/1.json
  def update
    respond_to do |format|
      if @follow_up.update(follow_up_params)
        format.html { redirect_to @follow_up.meeting, notice: 'Follow up was successfully updated.' }
        format.json { render :show, status: :ok, location: @follow_up }
      else
        format.html { render :edit }
        format.json { render json: @follow_up.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /follow_ups/1
  # DELETE /follow_ups/1.json
  def destroy
    @follow_up.destroy
    respond_to do |format|
      format.html { redirect_to @meeting, notice: 'Follow up was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_meeting
    @meeting = Meeting.find(params[:meeting_id])
  end
    # Use callbacks to share common setup or constraints between actions.
    def set_follow_up
      @follow_up = FollowUp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def follow_up_params
      params.require(:follow_up).permit(:body, :date, :meeting_id)
    end
end
