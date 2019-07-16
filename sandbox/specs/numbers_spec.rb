require("minitest/autorun")
require("minitest/rg")
require_relative("../numbers.rb")

class NumbersTest < MiniTest::Test

  def setup
    numbers = [1,2,3,4,5,6,7,8,9,10]
    @numbers = Numbers.new(numbers)
  end

  def test_can_find_number_in_array
    assert_equal("Your number is here", @numbers.numbers.includesNumber(1))
  end




end
