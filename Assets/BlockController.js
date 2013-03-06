#pragma strict

function OnCollisionEnter(collision: Collision) {
	Destroy(gameObject,0.5);
	collider.enabled = false;
	animation.Play("block erase@Block");
}