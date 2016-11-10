/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

Test.describe("Example Test Cases", function(){

	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

});
