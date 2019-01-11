class MeetingsController < ApplicationController
  before_action :set_meeting, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @meetings = Meeting.order(schedule_date: :asc)
  end
  
  def show
  end

  # GET /meetings/new
  def new
    @meeting = Meeting.new
    @meeting.follow_ups.build
  end

  # GET /meetings/1/edit
  def edit
  end

  # POST /meetings  
  def create
    @meeting = Meeting.new(meeting_params)

    respond_to do |format|
      if @meeting.save
        format.html { redirect_to @meeting, notice: 'Junta agendada' }
        format.json { render :show, status: :created, location: @meeting }
      else
        format.html { render :new }
        format.json { render json: @meeting.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /meetings/1
  def update
    respond_to do |format|
      if @meeting.update(meeting_params)
        format.html { redirect_to @meeting, notice: 'Junta ajustada' }
        format.json { render :show, status: :ok, location: @meeting }
      else
        format.html { render :edit }
        format.json { render json: @meeting.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /meetings/1
  def destroy
    @meeting.destroy
    respond_to do |format|
      format.html { redirect_to meetings_url, notice: 'La junta se borro' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meeting
      @meeting = Meeting.find(params[:id])
    end
    
    def meeting_params
      params.require(:meeting).permit(:title, :body, :schedule_date, :purpose, :duration, :start_time, follow_ups_attributes: [:id, :body, :date])
    end
end
