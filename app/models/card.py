from .db import db, environment, SCHEMA


class Card(db.Model):
  __tablename__ = 'cards'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  scryfall_id = db.Column(db.Uuid, nullable=False, unique=True)
  tcgplayer_id = db.Column(db.Integer, unique=True)
  oracle_id = db.Column(db.String, unique=True)

  name = db.Column(db.String, nullable=False)
  colors = db.Column(db.String)
  mana_cost = db.Column(db.String)
  keywords = db.Column(db.String)
  power = db.Column(db.String)
  toughness = db.Column(db.String)
  rarity = db.Column(db.String)
  img_url = db.Column(db.String)

  artist = db.Column(db.String)
  artist_id = db.Column(db.String)
  illustration_id = db.Column(db.String)

  set_code = db.Column(db.String)
  set_name = db.Column(db.String)
  set_id = db.Column(db.Uuid)
