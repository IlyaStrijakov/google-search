Feature: Google search

  Scenario Outline: As a user, I want to search for RTS Labs web site

    Given I search for google page
    When I type testRun in search field
    Then I click on "testRun" returned result

    Examples:
      # | username | password             | message                        |
      # | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      # | foobar   | barfoo               | Your username is invalid!      |
