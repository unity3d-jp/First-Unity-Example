#pragma strict

var Accel = 1000;

function FixedUpdate()
{
#if (UNITY_ANDROID || UNITY_IPHONE) && !UNITY_EDITOR
	if( Input.touchCount != 0)
	{
		var power : float = Mathf.Clamp( Input.GetTouch(0).deltaPosition.x, -3, 3);
		rigidbody.AddForce( power * Accel, 0, 0, ForceMode.Impulse);
	}
#else
	rigidbody.AddForce( 
		transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel, 
		ForceMode.Impulse );
#endif
}