<?php

declare(strict_types=1);

$EM_CONF[$_EXTKEY] = [
    'title' => 'DataHandler Test',
    'description' => 'DataHandler Test',
    'category' => 'example',
    'version' => '11.5.15',
    'state' => 'beta',
    'author' => 'Oliver Hader',
    'author_email' => 'oliver@typo3.org',
    'author_company' => '',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.15',
            'workspaces' => '11.5.15',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
