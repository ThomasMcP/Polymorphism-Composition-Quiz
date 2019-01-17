# Polymorphism & Composition Homework - Quiz

# Polymorphism

1. What does the ___word___ 'polymorphism' mean?

<!--  A state or thing that can take many forms or shapes at different times-->

2. What does it mean when we apply polymorphism to OO design? Give a simple Java example.

<!-- It allows a programmer to change type of an object to that of a different class.
We can then call the methods of the altered class on that object.

Vehicle vehicle = new Car(....);

This variable 'vehicle' is of a Vehicle type. A new car of Car class is then instantiated and put into that variable.
This would work because Vehicle type would be a parent of Car type.

-->

3. What can we use to implement polymorphism in Java?

<!-- We can create Interfaces and then 'implement' them into certain classes. And changing the type of the property you have chosen to that of the interface.  -->


4. How many 'forms' can an object take when using polymorphism?

<!-- Two forms.'Compile time' (dynamic) and 'Runtime' (static - methods that are 'overridden' this is when there is a method from the parent class and when written in the child class the body is changed.). This can be done through overriding methods (dynamic) and overloading methods(static - where there are many methods of the same name but perhaps take different or more arguments). -->

5. Give an example of when you could use polymorphism.

<!-- Two as stated above when overloading or overriding methods. Or to change the state of an object to something more generic (example). -->



# Composition

6. What do we mean by 'composition' in reference to object-oriented programming?

<!-- This is where a class is composed of attributed which have types from different classes.  -->

7. When would you use composition? Provide a simple example in Java.

<!--  
class Engine(String Type){
  this.type = type;
}

class Car(Engine engine){
    this.engine = engine;
}

The above shows an attribute of engine class makes up the Car class. This is Composition.
-->

8. What is/are the advantage(s) of using composition?

<!--  It is more flexible than Inheritance. More parts that are arguably somewhat independent but allow owned by the class. It helps maintain encapsulation. No conflict between method and property names that you might with inheritance.  -->

9. What happens to the behaviours when the object composed of them is destroyed?

<!-- They are no longer available. In composition, an object may take in one or more different types/objects but when the whole object is deleted all parts are deleted.    -->
