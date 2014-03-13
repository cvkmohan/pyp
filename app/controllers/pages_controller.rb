class PagesController < ApplicationController
  #skip_authorization_check
  skip_before_action :authenticate_user!

  protect_from_forgery except: :solve

  def index
    #flash[:notice] = "Hi #{current_user.email}, welcome back. You were last seen #{current_user.last_sign_in_at.to_formatted_s(:short)}. Continue?"
    #render text: current_user.last_sign_in_at, layout: false
  end

  def error
    redirect_to root_path if flash.empty?
  end

  def content
    leaf_id = params[:id].to_i;
    leaf_json = parse_json
    @leaf_data = leaf_json['leafs'][leaf_id]
    
    file = case @leaf_data['leaf_type']
      when 'question'
        'question'
      when 'video'
        'video'
      when 'flashcard'
        'flashcard'
      when 'simulation'
        'simulation'
      when 'intro'
        'introduction'     
      else
        'info'           
      end

      
    render file, layout: false
  end

  def solve
    leaf_id = params[:id].to_i;
    answer = params[:answer].to_i

    leaf_json = parse_json
    @leaf_data = leaf_json['leafs'][leaf_id]
    
    status = "true" if answer == @leaf_data['correct'].to_i

    @json_data = {:status => status, 
      :correct => @leaf_data['correct_option'], 
      :button_success => @leaf_data['button_success'],
      :button_error => @leaf_data['button_error']
    }

    render json: @json_data
    
  end

  def player
    leaf_json = parse_json

    render 'player'
  end

  def language
    leaf_id = params[:id].to_i;

    render 'arabic', layout: false
  end

  def fb
    leaf_id = params[:id].to_i;
    answer = params[:answer].downcase
    
    leaf_json = parse_json
    @leaf_data = leaf_json['leafs'][leaf_id]
    
    status = "true" if answer.include? @leaf_data['words']
    @json_data = {:status => status, 
      :correct => @leaf_data['correct'], 
      :button_success => @leaf_data['button_success'],
      :button_error => @leaf_data['button_error']
    }

    render json: @json_data
  end


  private

  def parse_json
    json_file_path = "#{Rails.public_path}/data/data.json"
    json = File.read(json_file_path)

    leaf_json = JSON.parse(json)
  end

end