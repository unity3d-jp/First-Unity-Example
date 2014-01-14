#pragma strict

var Accel = 1000;

function FixedUpdate()
{
	rigidbody.AddForce( 
		transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel, 
		ForceMode.Impulse );
}