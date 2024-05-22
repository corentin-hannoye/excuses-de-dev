<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ApologieRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    normalizationContext: ['groups' => 'read:item']
)]
#[ORM\Entity(repositoryClass: ApologieRepository::class)]
class Apologie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:item')]
    private ?string $message = null;

    #[ORM\ManyToOne(inversedBy: 'apologies')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('read:item')]
    private ?HttpCode $http_code = null;

    #[ORM\ManyToOne(inversedBy: 'apologies')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('read:item')]
    private ?Tag $tag = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getHttpCode(): ?HttpCode
    {
        return $this->http_code;
    }

    public function setHttpCode(?HttpCode $http_code): static
    {
        $this->http_code = $http_code;

        return $this;
    }

    public function getTag(): ?Tag
    {
        return $this->tag;
    }

    public function setTag(?Tag $tag): static
    {
        $this->tag = $tag;

        return $this;
    }
}
