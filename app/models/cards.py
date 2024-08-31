from .db import db


class Cards(db.Model):
  __tablename__ = 'cards'

  # if environment == "production":
  #       __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(), nullable=False, unique=True)
  legalities = db.Column(db.JSON)

  def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }
