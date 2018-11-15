//
//  DetailViewController.swift
//  RNModule
//
//  Created by 홍창남 on 14/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import UIKit

class DetailViewController: UIViewController {

    var selectedIndexPath: IndexPath?

    let vcLabel: UILabel = {
        let label = UILabel()
        label.textColor = .black
        label.translatesAutoresizingMaskIntoConstraints = false
        label.numberOfLines = 3
        label.textAlignment = .center
        return label
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        self.title = "Swift ViewController"
        
        self.view.backgroundColor = .white
        self.view.addSubview(vcLabel)

        if let selectedIndexPath = selectedIndexPath {
            vcLabel.text = "Welcome DetailView Controller\nsection: \(selectedIndexPath.section)\nrow: \(selectedIndexPath.row)"
        }

        NSLayoutConstraint.activate([
            vcLabel.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            vcLabel.centerYAnchor.constraint(equalTo: self.view.centerYAnchor)
            ])
    }
}
