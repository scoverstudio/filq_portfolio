# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    if user.admin?
      can :manage, User
    elsif user.user?
      can :manage, User
    end
  end
end
