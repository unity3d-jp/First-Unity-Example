#pragma strict

public var sound : AudioClip;


function OnCollisionEnter(collision: Collision) {
     AudioSource.PlayClipAtPoint(sound, transform.position);
}