//
//  SettingTableViewController.swift
//  RNModule
//
//  Created by USER on 2018. 11. 13..
//  Copyright © 2018년 홍창남. All rights reserved.
//

import Foundation

class SettingTableViewController: UIViewController {

    let settingTableView = RCTRootView(RNBridgeManager.default,
                                       moduleName: "SettingTableView",
                                       initialProperties: nil)

    override func viewDidLoad() {
        super.viewDidLoad()

        settingTableView.frame = self.view.frame
        self.view.addSubview(settingTableView)

        NotificationCenter.default.addObserver(self,
                                               selector: #selector(didSelectRNTableViewCell),
                                               name: NSNotification.Name(rawValue: "didSelectTableViewCell"),
                                               object: nil)
    }

    @objc func didSelectRNTableViewCell() {
        DispatchQueue.main.async {
            let detailVC = DetailViewController()
            self.navigationController?.pushViewController(detailVC, animated: true)
        }
    }
}
