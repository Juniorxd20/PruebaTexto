 #pragma strict
 var flashSound : AudioClip;
 var flashAnimation : Animation;
 var flashAnimation2 :Animation;
 var flashLight1 : GameObject;
 var flashLight2 : GameObject;
 
 function Start () 
 {
     if(Input.GetKeyDown("f"))
     {
     flashLight1.GetComponent.<Animation>().Play("Flash");
     flashLight2.GetComponent.<Animation>().Play("Flash2");
     GetComponent.<AudioSource>().clip = flashSound;
     GetComponent.<AudioSource>().Play();
     }
 }
