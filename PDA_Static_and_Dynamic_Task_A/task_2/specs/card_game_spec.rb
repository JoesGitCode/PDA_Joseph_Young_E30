require_relative('../card_game.rb')
require_relative('../card.rb')
require('minitest/autorun')
require('minitest/rg')


class CardGameTest < MiniTest::Test

  def setup

    @card_ace = Card.new("Heart", 1)
    @card_two = Card.new("Heart", 2)

    @cardGame = CardGame.new()

    @cards = [@card_ace, @card_two]
  end

  def test_a_card_has_a_suit
    assert_equal("Heart", @card_ace.suit)
  end

  def test_a_card_has_a_value
    assert_equal(1, @card_ace.value)
  end

  def test_checkforAce
    assert_equal(true, @cardGame.checkforAce(@card_ace))
  end

  def test_highest_card
    assert_equal(@card_two, @cardGame.highest_card(@card_two, @card_ace))
  end

  def test_cards_total
    assert_equal('You have a total of 3', @cardGame.cards_total(@cards))
  end

end
