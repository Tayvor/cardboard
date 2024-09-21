from flask import Blueprint, request, jsonify
from app.models import db, Card
from app.forms import CardForm

card_routes = Blueprint('card', __name__, url_prefix='/api/cards')


@card_routes.get('/all')
def get_user_cards():
  cards = [
    {
      'name': 'Unhinge',
      'img_url': 'https://cards.scryfall.io/normal/front/b/8/b89deafd-cb7c-4da7-ab9b-8f795554a705.jpg?1562631705',
      'set_name': 'Torment',
      'artist': 'Keith Garletts'
    },
    {
      'name': 'Treeguard Duo',
      'img_url': 'https://cards.scryfall.io/normal/front/8/9/89c8456e-c971-42b7-abf3-ff5ae1320abe.jpg?1721426977',
      'set_name': 'Bloomburrow',
      'artist': 'Mila Pesic'
    },
    {
      'name': 'Elvish Spirit Guide',
      'img_url': 'https://cards.scryfall.io/normal/front/0/2/024110ee-5520-49f8-afab-54dcce87c650.jpg?1682712958',
      'set_name': 'Secret Lair Drop',
      'artist': 'Yuko Shimizu'
    },
  ]
  return jsonify(cards)


@card_routes.post('/create')
def create_card():
  form = CardForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  query = db.select(Card).filter_by(scryfall_id=form.data['scryfall_id'])
  result = db.session.scalar(query)

  if result:
    return result
  else:
    card = Card(
      scryfall_id = form.data['scryfall_id'],
      tcgplayer_id = form.data['tcgplayer_id'],
      oracle_id = form.data['oracle_id'],
      name = form.data['name'],
      colors = form.data['colors'],
      mana_cost = form.data['mana_cost'],
      keywords = form.data['keywords'],
      power = form.data['power'],
      toughness = form.data['toughness'],
      rarity = form.data['rarity'],
      artist = form.data['artist'],
      artist_id = form.data['artist_id'],
      illustration_id = form.data['illustration_id'],
      set_code = form.data['set_code'],
      set_name = form.data['set_name'],
      set_id = form.data['set_id']
    )
    db.session.add(card)
    db.session.commit()
    return card
