<?php

namespace App\Controller;

use App\Entity\Participants;
use App\Entity\Events;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\EventsRepository;
class EventController extends AbstractController
{
    private $entityManager;
    private $eventsRepository;

    public function __construct(EntityManagerInterface $entityManager, EventsRepository $eventsRepository)
    {
        $this->entityManager = $entityManager;
        $this->eventsRepository = $eventsRepository;
    }


    #[Route('/api/join-event', name: 'join_event', methods: ["POST"])]
    public function joinEvent(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (!isset($data['event_id'])) {
            return new JsonResponse(['error' => 'event_id is missing'], 400);
        }
        $name = $data['name'];
        $phone = $data['phone'];
        $event_id = $data['event_id'];

        // Find the Event entity based on the event_id
        $event = $this->eventsRepository->find($event_id);
        if ($event === null) {
            return new JsonResponse(['error' => 'Event not found'], Response::HTTP_NOT_FOUND);
        }

        $participant = new Participants();
        $participant->setName($name);
        $participant->setPhoneNum($phone);
        $participant->setEventId($event);

        $this->entityManager->persist($participant);
        $this->entityManager->flush();

        return new JsonResponse(['status' => 'Participant added'], Response::HTTP_CREATED);
    }

    #[Route('/api/submit-event', name: 'submit_event', methods: ["POST"])]
    public function submitEvent(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $name = $data['name'];
        $date = new \DateTime($data['date']);
        $description = $data['description'];

        $event = new Events();
        $event->setName($name);
        $event->setDate($date);
        $event->setDescription($description);

        $this->entityManager->persist($event);
        $this->entityManager->flush();

        return new JsonResponse(['status' => 'Event added'], Response::HTTP_CREATED);
    }


}
