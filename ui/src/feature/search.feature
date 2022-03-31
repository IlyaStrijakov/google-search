
Feature: Google search

  Scenario Outline: As a user, I want to search for RTS Labs Google

    Given I open "https://google.com" page
    When I type "RTS Labs" in search field
    When I click on "RTS Labs" link
    Then I verify I am on the "RTS Labs" page
    