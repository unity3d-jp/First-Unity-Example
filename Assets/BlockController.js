#pragma strict

function OnCollisionEnter(collision: Collision) {
	Destroy(gameObject);
}