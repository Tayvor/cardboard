from flask import Blueprint, jsonify
from app.models import db, Card

card_routes = Blueprint('card', __name__, url_prefix='/api/cards')


card_routes.get('/all')
def get_user_cards():
  cards = [
    {1: 'one'},
    {2: 'two'},
    {3: 'three'}
  ]
  return jsonify(cards)
