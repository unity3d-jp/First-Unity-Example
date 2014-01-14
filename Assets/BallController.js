#pragma strict

var Speed = 20;

function Start () {
	rigidbody.AddForce( ( transform.forward + transform.right ) * Speed, ForceMode.VelocityChange );
}
