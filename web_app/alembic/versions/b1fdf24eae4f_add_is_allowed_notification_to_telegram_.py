"""add is_allowed_notification to telegram_user

Revision ID: b1fdf24eae4f
Revises: 02521fa24607
Create Date: 2024-11-13 22:46:54.671430

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b1fdf24eae4f'
down_revision = '02521fa24607'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('telegram_user', sa.Column('is_allowed_notification', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('telegram_user', 'is_allowed_notification')
    # ### end Alembic commands ###
